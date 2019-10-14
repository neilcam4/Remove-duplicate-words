describe('remove duplicate strings', function(){
    it('describes sort dtring into individual words', function(){
        var string = 'alpha beta gamma gamma'
        var result = splitString(string)
        expect(result).toEqual(['alpha', 'beta', 'gamma', 'gamma'])
    })
    it('sorts array into alphabetical order', function(){
        var string = 'alpha beta gamma gamma alpha'
        var result = splitString(string)
        expect(result).toEqual(['alpha', 'alpha', 'beta', 'gamma', 'gamma'])
    })
    it('should push word into new array if not included', function(){
        var string = 'alpha beta gamma gamma alpha'
        var result = removeDuplicateWords(string)
        expect(result).toEqual('alpha beta gamma')
    })
    it('should return output as a single string', function(){
        var string = 'alpha beta gamma gamma alpha'
        var result = removeDuplicateWords(string)
        expect(result).toEqual('alpha beta gamma')
    })
})

// Your task is to remove all duplicate words from a string, 
// leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'