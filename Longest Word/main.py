def get_longest_word(sentence):
    max_word_length = -1000
    max_word_index = -1000
    word_arr = sentence.split(" ");
    # print(word_arr)
    for i in range(0,len(word_arr),1):
        word = word_arr[i];
        word_length = len(word.replace(".",""))

        word_arr[i] = word.replace(".","")
        if word_length > max_word_length and word_length != max_word_length:
            max_word_length = word_length;
            max_word_index = i
        
    
    return word_arr[max_word_index]

print(
    get_longest_word("coding is fun")
)


#  Time: O(n)
#  Space: O(n)