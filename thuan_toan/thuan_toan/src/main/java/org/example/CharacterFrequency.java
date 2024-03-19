package org.example;

import java.util.HashMap;
import java.util.Map;

public class CharacterFrequency {
    public static void main(String[] args) {
        String str = "aabacsdc";
        Map<Character, Integer> frequencyMap = new HashMap<>();

        for (char ch : str.toCharArray()) {
            frequencyMap.put(ch, frequencyMap.getOrDefault(ch, 0) + 1);
        }

        System.out.print("Số lần xuất hiện của các ký tự trong chuỗi \"" + str + "\": ");
        for (Map.Entry<Character, Integer> entry : frequencyMap.entrySet()) {
            System.out.print(entry.getValue() + "" + entry.getKey() + ", ");
        }
    }
}
