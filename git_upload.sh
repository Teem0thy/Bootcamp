#!/bin/bash
if [ $# == 1 ]
then
git config --global user.email i.timofej.p@gmail.com
git config --global user.name Teem0thy
git add .
git status
git commit -m $1
git push origin main
fi
