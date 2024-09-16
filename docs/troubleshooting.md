---
sidebar_position: 6
description: Troubleshooting
---

# Troubleshooting

## Plugin Manager Crash or Failure

Most of the time this happens after updating to a newer plugin manager version
and using old state data, common symptom is failing to download plugins.
To fix you can try the following steps:

1. Close any open editor instances.
2. Remove the plugin manager state directory `rm -rf ~/.config/pragtical/ppm`
   (on windows the directory is in `C:\Users\YourUserName\.config\pragtical\ppm`).
3. Re-open the editor, launch the plugin manager and try again.
4. If this doesn't solves the problem open a [plugin manager issue].

[plugin manager issue]: https://github.com/pragtical/plugin-manager
