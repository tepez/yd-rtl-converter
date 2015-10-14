## How to use

1. Make sure you have nodejs installed on your computer.
2. Download the project, let's say it's in `c:\yd-rtl-converter`.
3. Open the command prompt (start -> run -> command) and execute in the following order:
    ```
    npm install -g gulp
    c:
    cd c:\yd-rtl-converter
    npm install
    ```
4. Copy the files to want to flip to the `src` directory. You can also put there files that are not CSS files.
5. Execute in the command prompt:
    ```
    gulp
    ```
6. Your flipped CSS files will be in the `dst` directory. Files that are not CSS will also be copied, unchanged, so you can put the entire theme folder in the `src` directory. The folder structure will remain the same.

I put the bootstrap files in the `src` directory so you can see how it works.