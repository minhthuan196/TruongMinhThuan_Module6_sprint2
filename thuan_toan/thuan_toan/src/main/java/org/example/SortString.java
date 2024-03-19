package org.example;

import java.util.Arrays;

public class SortString {
    public static void main(String[] args) {
        String inputString = "acbdfeg";

        String sortedString = sortString(inputString);
        System.out.println("Chuỗi sau khi được sắp xếp: " + sortedString);
    }

    public static String sortString(String input) {
        // Chuyển đổi chuỗi thành một mảng các ký tự
        char[] charArray = input.toCharArray();

        // Sắp xếp mảng ký tự theo thứ tự tăng dần
        Arrays.sort(charArray);

        // Tạo một chuỗi mới từ mảng ký tự đã sắp xếp
        String sortedString = new String(charArray);

        return sortedString;
    }
}
