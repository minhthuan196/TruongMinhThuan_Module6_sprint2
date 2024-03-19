package org.example;

public class CountOccurrences {
    public static void main(String[] args) {
        String inputString = "abcaabbccd";
        char targetChar = 'a';

        int count = countOccurrences(inputString, targetChar);
        System.out.println("Số lần xuất hiện của ký tự '" + targetChar + "': " + count);
    }

    public static int countOccurrences(String input, char target) {
        int count = 0;
        for (int i = 0; i < input.length(); i++) {
            if (input.charAt(i) == target) {
                count++;
            }
        }
        return count;
    }
}
