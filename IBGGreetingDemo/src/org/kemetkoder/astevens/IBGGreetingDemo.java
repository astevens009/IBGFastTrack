package org.kemetkoder.astevens;

import java.util.*;

public class IBGGreetingDemo {

    public static void main(String[] args) {
        Scanner nameInput = new Scanner(System.in);
        String userName;

        System.out.println("Please enter your name: ");
        userName = nameInput.nextLine();

        System.out.println("Wake up " + userName + "!\n" +
                "The Matrix has you...");
    }
}
