class Diary {
    constructor() {
      this.entries = [];
    }
    write(text) {
      var entry = {
        text: text,
        date: new Date(),
      }
      this.entries.push(entry);
  
    }
    numEntries() {
      return this.entries.length;
    }
    ripPages() {
        this.entries = [];
    }
    erase(index) {
        this.entries.splice(index, 1);
    }
  }
  
  var diary1 = new Diary();
  diary1.write("First entry!");
  diary1.write("Second entry!");
  
  diary1.erase(2)
  console.log(diary1.entries);
  