interface IRoles {
// Not restricting the number of properties of the interface, but I am telling typescript the
// Types of the data - Key is a string paired with an array of strings
    [key:string]: string[];

}