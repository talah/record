#!/bin/bash

DIR=$(pwd)

cd $MTURK_CMD_HOME/bin
./loadHITs.sh $@ -label $DIR/external_hit -input $DIR/external_hit.input -question $DIR/external_hit.question -properties $DIR/external_hit.properties
