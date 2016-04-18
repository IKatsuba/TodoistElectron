@echo off
grunt release && node build_scripts/_pack.js
rem && grunt create-windows-installer