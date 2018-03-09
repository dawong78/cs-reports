#!/usr/bin/python

# Inline all the css and javascript files into a single html file.
# This was written for linux file systems.
#
# Usage:
#   ./build.py

import os.path

root = "public_html/"
inFile = root + "SubmitReport.html"
outFile = root + "SubmitReport_single.html"
out = open(outFile, "w")
with open(inFile) as f:
    content = f.readlines()
    for line in content:
        index = line.find("<link")
        if index >= 0:
            # found css
            start = line.find("href=\"") + 6
            end = line.find("\"", start)
            cssFilePath = root + line[start:end]
            if os.path.isfile(cssFilePath):
                print cssFilePath
                cssFile = open(cssFilePath, "r")
                out.write("<style>\n")
                for ln in cssFile:
                    out.write(ln)
                cssFile.close()
                out.write("</style>\n")
        elif line.find("<script") >=0:
            # found javascript
            start = line.find("src=\"") + 5
            end = line.find("\"", start)
            jsFilePath = root + line[start:end]
            if os.path.isfile(jsFilePath):
                print jsFilePath
                jsFile = open(jsFilePath, "r")
                out.write("<script type=\"text/javascript\">")
                for ln in jsFile:
                    out.write(ln)
                jsFile.close()
                out.write("</script>")
        else:
            out.write(line)
out.close()
