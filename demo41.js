const buffer1 = Buffer.allocUnsafe(40);
console.log(buffer1)
buffer1.fill(0)
console.log(buffer1)
const buffer2 = Buffer.alloc(40);
console.log("buffer2:", buffer2)
len = buffer1.write("abc")
console.log("len=", len, "buffer1=", buffer1)
const buffer3 = Buffer.from([97, 98, 99, 100])
const buffer4 = Buffer.from("Hello World")
console.log(buffer3)
console.log(buffer4)