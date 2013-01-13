"use strict";

var fs = require('fs');
var Q = require('q');
var path = require('path');
var transform = require('./transform.js');
var rimraf = require('rimraf');

function isDir(filename){
    return Q.nfcall(fs.stat, filename)
        .then(function(stat){
            // man stat: S_IFDIR  0040000  directory
            return !!(stat.mode & 4*Math.pow(8, 4));
        });
}


var originalTestSuitePath = __dirname + "/../../ecma262/test/originalSuite";
var destinationTestSuitePath = __dirname + "/../../ecma262/test/suite";

function traverse(filepath, dirVisitor, fileVisitor){
    isDir(filepath)
        .then(function(isdir){
            if(isdir){
                return Q.all([
                    dirVisitor(filepath),
                    Q.nfcall(fs.readdir, filepath)
                        .then(function(files){
                            files.forEach(function(file){
                                process.nextTick(function(){
                                    traverse(path.join(filepath, file), dirVisitor, fileVisitor);
                                });
                            })
                        })
                        .fail(function(error){
                            console.log('readdir error', error);
                        })
                ]);
            }
            else
                return fileVisitor(filepath);
        })
        .fail(function(error){
            console.log('isDir error', error);
        })
}

// TODO delete the test/suite directory before traversing

Q.nfcall(rimraf, destinationTestSuitePath)
    .then(function(){
        traverse(originalTestSuitePath,
            function(dirPath){
                //console.log('dirPath', dirPath);
                var dirToBuild = path.join(destinationTestSuitePath, path.relative(originalTestSuitePath, dirPath));
                Q.nfcall(fs.mkdir, dirToBuild)
                    .then(function(){
                        //console.log('Properly built', dirToBuild);
                    })
                    .fail(function(error){
                        console.log('Error building', dirToBuild, error);
                    })

            },
            function(filePath){
                console.log('traversing', filePath);
                var fileToCreate = path.join(destinationTestSuitePath, path.relative(originalTestSuitePath, filePath));
                Q.nfcall(fs.readFile, filePath)
                    .then(function(fileContent){
                        return Q.nfcall(fs.writeFile, fileToCreate, transform(fileContent));
                    })
                    .fail(function(err){
                        console.log('Error for', filePath, err);
                    })
            }
        );

    })
    .fail(function(err){
        console.log('rimraf error', err);
    });



