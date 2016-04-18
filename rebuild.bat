@echo off

if [%1] == [lib] (
    lib && build
) else (
    build
)
