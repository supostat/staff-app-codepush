const plist = require('plist');
const fs = require('fs');
const cmd = require('node-cmd');
const { promisify } = require('util');
const bugsnagSourcemaps = require('bugsnag-sourcemaps');

const PROJECT_DIR = './ios/BossStaffApp';
const INFOPLIST_FILE = 'Info.plist';
const INFOPLIST_DIR = `${PROJECT_DIR}/${INFOPLIST_FILE}`;
const BUILD_DIR = 'codePushBuild';
const BUGSNAG_API_KEY = 'c242cd87892f99f9a4cf17369a71b911';

const writeFileAsync = promisify(fs.writeFile);
const cmdGetAsync = promisify(cmd.get);

async function main() {
  try {
    const infoPlist = plist.parse(fs.readFileSync(INFOPLIST_DIR, 'utf8'));
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    const { version } = packageJson;

    console.log('package.json version: ', version);

    const buildNumber = String(Number(infoPlist.CFBundleVersion) + 1);
    console.log('CFBundleVersion: ', buildNumber);
    console.log('CFBundleShortVersionString: ', version);

    infoPlist.CFBundleVersion = buildNumber;
    infoPlist.CFBundleShortVersionString = version;

    await writeFileAsync(INFOPLIST_DIR, plist.build(infoPlist), 'utf8');
    console.log(`writing to ${INFOPLIST_DIR}`);
    console.log('Releasing update for ios');
    const dataIos = await cmdGetAsync(
      `appcenter codepush release-react -a STAFF-APP/staff-app-ios --output-dir ${BUILD_DIR} -d Staging --mandatory --target-binary-version '*'`,
    );
    console.log(dataIos);
    console.log('Uploading source maps for ios...');
    await bugsnagSourcemaps.upload({
      apiKey: BUGSNAG_API_KEY,
      codeBundleId: version,
      minifiedFile: `${BUILD_DIR}/CodePush/main.jsbundle`,
      sourceMap: `${BUILD_DIR}/CodePush/main.jsbundle.map`,
      minifiedUrl: 'main.jsbundle',
      uploadSources: true,
      overwrite: true,
      addWildcardPrefix: true,
    });
    console.log('Source maps for ios have been uploaded');

    console.log('Releasing update for android');

    const dataAndroid = await cmdGetAsync(
      `appcenter codepush release-react -a STAFF-APP/staff-app-android --output-dir ${BUILD_DIR} -d Staging --mandatory --target-binary-version '*'`,
    );
    console.log(dataAndroid);
    console.log('Uploading source maps for android...');
    await bugsnagSourcemaps.upload({
      apiKey: BUGSNAG_API_KEY,
      codeBundleId: version,
      minifiedFile: `${BUILD_DIR}/CodePush/index.android.bundle`,
      sourceMap: `${BUILD_DIR}/CodePush/index.android.bundle.map`,
      minifiedUrl: 'index.android.bundle',
      uploadSources: true,
      overwrite: true,
      addWildcardPrefix: true,
    });
    console.log('Source maps for android have been uploaded');
    await cmdGetAsync(`git add ${INFOPLIST_DIR}`);
  } catch (error) {
    console.log(error);
  }
}

main();
