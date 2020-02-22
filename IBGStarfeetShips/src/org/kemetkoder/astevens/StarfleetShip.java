package org.kemetkoder.astevens;

public class StarfleetShip {
    enum ShipStatus{
        NonCommissioned,
        Active,
        OnAssignment,
        Destroyed,
        Repairing,
        Refit,
        Upgrade,
        Missing,
        Decommissioned
    }

    enum ShipClass{
        None,
        Constellation,
        Constitution,
        Defiant,
        Galaxy,
        Soyuz,
        Nebula,
        Intrepid,
        Excelsior
    }

    private String callSign;
    private String shipName;
    private ShipStatus status;
    private ShipClass shipClass;

    public StarfleetShip(){
        this.callSign = "NCC-0000";
        this.shipName = "Ital Odo";
        this.status = ShipStatus.NonCommissioned;
        this.shipClass = ShipClass.None;
    }

    public StarfleetShip(String callSign, String shipName, ShipStatus status,
                         ShipClass shipClass) {
        this.callSign = callSign;
        this.shipName = shipName;
        this.status = status;
        this.shipClass = shipClass;
    }

    public String getCallSign() {
        return callSign;
    }

    public void setCallSign(String callSign) {
        this.callSign = callSign;
    }

    public String getShipName() {
        return shipName;
    }

    public void setShipName(String shipName) {
        this.shipName = shipName;
    }

    public ShipStatus getStatus() {
        return status;
    }

    public void setStatus(ShipStatus status) {
        this.status = status;
    }

    public ShipClass getShipClass() {
        return shipClass;
    }

    public void setShipClass(ShipClass shipClass) {
        this.shipClass = shipClass;
    }

    @Override
    public String toString() {
        String shipInfo = "";

        shipInfo = "\t\tCall Sign: " + this. getCallSign() + "\n\t\tShip Name: " + this.getShipName() +
                "\n\t\tCurrent Status: " + this.getStatus() + "\n\t\tShip Class: " + this.getShipClass();

        return shipInfo;
    }
}
