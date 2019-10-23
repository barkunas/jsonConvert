import os
import sys

inputFile = sys.argv[1]
outputFile = sys.argv[2]
test = '--swf-cache c:\ProgramData\.flaconverter\\fonts --flash "C:\Program Files\Adobe\Adobe Animate CC 2017\Animate.exe" --log-file "E:\Soft\SceneViewer\sceneViewertemp\log.txt" --cache "E:\Soft\SceneViewer\sceneViewertemp\round" --target-height 720 --glyph-cache "E:\Soft\SceneViewer\ReleaseProfiled\..\GlyphCache" --lock-file "E:\Soft\SceneViewer\ReleaseProfiled\..\LockFile" --build-dir "E:\Soft\SceneViewer\sceneViewertemp" --export-locales en --format binary3 --default-locale en --out "E:\\new_svn\myProject\\flatoBipWithCustomJson-git\jsonConvert\public\\results\\'+outputFile+'\package.bip" -- "E:\\new_svn\myProject\\flatoBipWithCustomJson-git\jsonConvert'+inputFile+'"'
string_one = 'python E:\\new_svn\\myProject\\flatoBipWithCustomJson-git\jsonConvert\\toolset-master@5e1a78d4eaa\FlashExport2\Converter.py '
string_two = '--swf-cache c:\ProgramData\.flaconverter\\fonts --flash "C:\Program Files\Adobe\Adobe Animate CC 2017\Animate.exe" --log-file "E:\Soft\SceneViewer\sceneViewertemp\log.txt" --cache "E:\\new_svn\myProject\\flatoBipWithCustomJson-git\jsonConvert\public\\results\\'+outputFile+'\package.bip" --target-height 720 --glyph-cache "E:\Soft\SceneViewer\ReleaseProfiled\..\GlyphCache" --lock-file "E:\Soft\SceneViewer\ReleaseProfiled\..\LockFile" --build-dir "E:\Soft\SceneViewer\sceneViewertemp" --export-locales en --format binary3 --default-locale en --out "E:\\new_svn\myProject\\flatoBipWithCustomJson-git\jsonConvert\public\\results\\'+outputFile+'\package.bip" -- "E:\BingoSVN\Bingo_Blitz_FLA\dynamic\\features\\bingo_modules\\tutorial\segment_1\\round.fla"'
string_three = string_one + test
os.system(string_three)