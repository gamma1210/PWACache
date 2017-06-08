# Android Runner
A tool to automate the execution of experiments

## Install
This tool is only tested on Ubuntu, but it should work in most linux distributions.
You'll need:
- Python 2.7 + easy_install
- Android Debug Bridge (adb)
- [pyand](https://github.com/ardevd/pyand)

## Quick start
To run an experiment, run:
```bash
python android_runner your_config.json
```
There is an example configuration file in `example/`

## Structure
### devices.json
A JSON config that maps devices names to their ADB ids for easy reference in config files.

## Configuration format
Below is work-in-progress documentation for the configuration format.
It may not be always updated.

**name** *string*  
Name of the experiment

**type** *string*  
Type of the experiment. Can be `web` or `apk`

**replications** *integer*  
Number of times an experiment is run.

**devices** *Array\<String\>*  
The names of devices to use. They will be translated into ids defined in devices.json.

**paths** *Array\<String\>*  
The paths to the APKs/URLs to test with.

**browsers** *Array\<String\>*  
*Dependent on type = web*  
The names of browser(s) to use. Currently supported values are `chrome`.

**measurements** *JSON* **Unstable**  
A JSON object to describe the measurements to perform. Below is an example:
```json
  "measurements": {
    "energy": {
      "tool": "trepn",
      "sample_rate": 100,
      "output": "./energy/"
    }
  }
```

**scripts** *JSON*  
A JSON list of types and paths of scripts to run. Below is an example:
```json
"scripts": {
  "setup": "setup.py",
  "before_run": "before_run.py",
  "interaction": "interaction.py",
  "after_run": "after_run.py",
  "teardown": "teardown.py"
}
```
Below are the supported types:
- setup  
  executes once before the first run
- before_run  
  executes before every run
- interaction  
  executes between the start and end of a run
- after_run  
  executes after a run completes
- teardown  
  executes once after the last run