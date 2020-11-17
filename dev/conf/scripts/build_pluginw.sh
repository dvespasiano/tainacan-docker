#!/bin/bash
cd /src/tainacan/
for i in "$@"
do
    case $i in
        --build*)
            ./buildw.sh
        ;;
        --watch-build*)
            ./build-watchw.sh
        ;;
    esac
done
