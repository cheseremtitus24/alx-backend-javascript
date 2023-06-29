export default class ClassRoom{
    _maxStudentsSize
    constructor(maxStudentsSize){
        if (isNaN(maxStudentsSize))
        {
            throw new TypeError("maxStudentsSize must be a number");
        }
        this._maxStudentsSize = maxStudentsSize;
    }
    
}