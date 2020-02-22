package org.kemetkoder.astevens;

public class IBGStarfleetShips {

    public static void main(String[] args) {
        StarfleetShip enterprise = new StarfleetShip();

        System.out.println("\nNew Starfleet Ship Object:" +
                "\nCurrent information on Enterprise ship: \n" +
                enterprise.toString());

        enterprise.setCallSign("NCC-1701-D");
        enterprise.setShipName("Enterprise-D");
        enterprise.setShipClass(StarfleetShip.ShipClass.Galaxy);
        enterprise.setStatus(StarfleetShip.ShipStatus.Destroyed);

        System.out.println("\nModified Starfleet Ship Object:" +
                "\nCurrent information on Enterprise ship: \n" +
                enterprise.toString());
    }
}
