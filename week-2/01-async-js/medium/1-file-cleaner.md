## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
const fs = require('fs');

var data =fs.readFileSync('a.txt', utf-8);

let cleaned = data.replace(/\s+/g,' ').trim();

fs.writeFileSync('a.txt', cleaned);