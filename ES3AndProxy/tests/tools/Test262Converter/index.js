"use strict";

var fs = require('fs');
var Q = require('q');
var path = require('path');
var transform = require('./transform.js');


function isDir(filename){
    return Q.nfcall(fs.stat, filename)
        .then(function(stat){
            // man stat: S_IFDIR  0040000  directory
            return !!(stat.mode & 4*Math.pow(8, 4));
        });
}


// Need a root directory
// Create an equivalent structure
// for each file, apply the transform function and output the file

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

traverse(originalTestSuitePath,
    function(dirPath){
        console.log('dirPath', dirPath);
        var dirToBuild = path.join(destinationTestSuitePath, path.relative(originalTestSuitePath, dirPath))
        /*Q.nfcall(fs.mkdir, dirToBuild)
            .then(function(){
                console.log('Properly built', dirToBuild);
            })
            .fail(function(error){
                console.log('Error building', dirToBuild, error);
            })
            */
    },
    function(filePath){
        //console.log('traversing', filePath);
        Q.nfcall(fs.readFile, filePath)
            .then(function(fileContent){
                transform(fileContent);
            })
            .fail(function(err){
                console.log('Error for', filePath, err);
            })
    }
);





// Starting at originalTestsPath
// list all files
// for each file:
// if starts with . => ignore
// if is a directory, create a directory with same relative path.
// if ends in .js, transform and create file with same relative path and transformed content

