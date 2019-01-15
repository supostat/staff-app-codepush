def get_package_json
  file = File.read("../package.json")
  JSON.parse(file)
end

def write_package_json!(json:)
  File.open("../package.json", "w") { |f| f.write JSON.pretty_generate(json) }
end

def write_package_json_version!(version:)
  package_json = get_package_json
  package_json["version"] = version.to_s
  write_package_json!(json: package_json)
end

def read_package_json_version
  package_json = get_package_json
  package_json["version"].to_version
end

def increment_package_json_minor_version!
  current_version = read_package_json_version
  new_version = current_version.minor!
  write_package_json_version!(version: new_version)
  new_version
end

def increment_package_json_major_version!
  current_version = read_package_json_version
  new_version = current_version.major!
  write_package_json_version!(version: new_version)
  new_version
end

def increment_package_json_patch_version!
  current_version = read_package_json_version
  new_version = current_version.patch!
  write_package_json_version!(version: new_version)
  new_version
end

def get_android_version
  path = "../android/app/build.gradle"
  re = /versionName\s+"(.*)"/

  build_file = File.read(path)
  build_file[re, 1].to_version
end

def get_ios_version
  get_version_number(xcodeproj: ENV["IOS_PROJECT_FILE_PATH"]).to_version
end

def update_ios_version!(version:)
  increment_version_number(
    version_number: version.to_s,
    xcodeproj: ENV["IOS_PROJECT_FILE_PATH"],
  )
end

def update_android_version!(version:)
  path = "../android/app/build.gradle"
  re = /versionName\s+"(.*)"/

  build_file = File.read(path)
  build_file[re, 1] = version.to_s

  f = File.new(path, "w")
  f.write(build_file)
  f.close
end