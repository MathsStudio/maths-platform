#!/bin/bash
# usage: b.sh out.html extra files...
ST="stx.js st502.js st503.js st504.js st505.js st506.js st507.js st508.js st509.js st510.js st701.js st702.js st703.js st704.js st705.js st706.js st707.js st708.js st709.js st710.js st711.js st712.js stories.js stories2.js"
S1="cap.js sk.js s801.js s802.js s803.js s804.js s805.js s806.js s807.js s808.js s809.js s810.js s811.js s812.js"
out=$1; shift
./build.sh $out $ST $S1 sk2.js "$@" | tail -1
