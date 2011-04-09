# toolkitt

Shell scripts to pull down and concatenate source libraries for use in various projects. This is meant to act as a submodule within a projects `script` or similar directory. It alleviates the need to have a multitude of submodules for various testing, benchmarking, minification type tools. The scripts pull from the raw master of source files and concatenate them together where it makes sense. It's not a tool for use with large libraries, more of those utility tools where you don't necessarily need their examples, tests, etc.

**All licenses have been included and concatenated into their respective source files.**


## Usage

The shell scripts require one argument for the directory to build the tools in (minus the trailing slash). The scripts must be called from the root directory of the project.

Example:

    ./path/to/tookitts/script_name.sh directory

*For testing purposes from this repository use `_tools` as the directory since it's being ignored by git and the generated files won't show up in the commits.*


## Scripts

### Jasmine

Build the Jasmine toolkitt:

    ./path/to/toolkitts/jasmine.sh tools

Generates 2 files from: [jasmine][jasmine], [jasmine-dom][jasmine-dom]

1. jasmine.js
    - [jasmine.js][jasmine]
    - [json2.js][jasmine]
    - [jasmine-dom-fixtures.js][jasmine-dom]
    - [jasmine-dom-matchers.js][jasmine-dom]
    - [jasmine-html.js][jasmine]
2. [jasmine.css][jasmine]


### Benchmark.js

Build the Benchmark toolkitt:

    ./path/to/toolkitts/benchmark.sh tools

Generates 1 file from: [benchmark][benchmark], [benchmark-addons][benchmark-addons]

1. benchmark.js
    - [benchmark.js][benchmark]
    - [benchmark-reporter.js][benchmark-addons]
    - [benchmark-testcase.js][benchmark-addons]


### Google Closure

Downloads and unzips the [Google Closure][closure] compiler into the `closure` directory.

    ./path/to/toolkitts/closure.sh tools

Generates a directory of unzipped files included with [Google Closure][closure] library.

1. [compiler.jar][closure]
- [COPYING][closure]
- [README][closure]

[jasmine]: https://github.com/pivotal/jasmine
[jasmine-dom]: https://github.com/jeffwatkins/jasmine-dom
[benchmark]: https://github.com/mathiasbynens/Benchmark.js
[benchmark-addons]: https://github.com/mkitt/benchmark.js-addons
[closure]: http://code.google.com/closure/compiler/


<!--
  TODO:
  - image compression tools
  - jshint?
  - add update script?
  - is shell the best idea here? maybe chef?
-->
