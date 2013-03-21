#!/bin/bash

mv ~/.surf/script.js ~/.surf/script.js.old
ln -s `pwd`/script.js ~/.surf/script.js

mv ~/.surf/user.js ~/.surf/user.js.old
ln -s `pwd`/user.js ~/.surf/user.js
