#!/bin/bash

docker exec -it tainacan-dev sh /src/build_themew.sh
for i in "$@"
do
    case $i in
        --build*)
            docker exec -it tainacan-dev sh -c "/src/build_pluginw.sh --build"
        ;;
        --watch-build*)
            docker exec -it tainacan-dev sh -c "/src/build_pluginw.sh --watch-build"
        ;;
    esac
done


