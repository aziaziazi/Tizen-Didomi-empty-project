# Install
- Create a Tizen certificate: https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/creating-certificates.html
- Enable Developer Mode on the TV: https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/tv-device.html
- Replace your `ip`, Tizen `target` and `packageId` in package.json and public/config.xml:

```
"tizen-install": "tizen install -t {{target}} --name emptyProject.wgt",
"tizen-run": "tizen run -t {{target}} -p {{packageId}}.emptyProject",
"tizen-sdb": "sdb -s {{ip}}:26101 shell 0 debug {{packageId}}.emptyProject",
```

```
<tizen:application id="{{packageId}}.emptyProject" package="{{packageId}}" required_version="5.5" />
```

- Replace Didomi `SDK-URL`, `Your-API-Key` and `Notice-ID` in `didomi-consent.js`
- Initialise the project: `npm i`
- Build the project: `npm run build`
- Install the project on the tv: `npm run tizen-start`

# Reproduction
Didomi notice open on start. Go to "Partners" then "See Partners". The quick action toogle "Accept all" does not work.

NB: The bug also appen on a local web browser: `npm run dev`.

