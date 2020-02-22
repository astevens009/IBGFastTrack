package org.kemetkoder.astevens;

import java.awt.*;

public class Building {
    enum BuildingType{
        Home,
        Commercial,
        Temporary,
        Storage,
        Bunker
    }

    private BuildingDimension bldngDim;
    private Dimension roomDim;
    private BuildingType buildType;
    private int numberOfRooms;
    private boolean hasSolarPanels;

    public Building() {
        buildType = BuildingType.Commercial;
        hasSolarPanels = false;
    }

    public Building(BuildingDimension bldngDim, Dimension roomDim, BuildingType buildType,
                    int numberOfRooms, boolean hasSolarPanels) {
        this.bldngDim = bldngDim;
        this.roomDim = roomDim;
        this.buildType = buildType;
        this.numberOfRooms = numberOfRooms;
        this.hasSolarPanels = hasSolarPanels;
    }

    public BuildingDimension getBldngDim() {
        return bldngDim;
    }

    public void setBldngDim(BuildingDimension bldngDim) {
        this.bldngDim = bldngDim;
    }

    public Dimension getRoomDim() {
        return roomDim;
    }

    public void setRoomDim(Dimension roomDim) {
        this.roomDim = roomDim;
    }

    public BuildingType getBuildType() {
        return buildType;
    }

    public void setBuildType(BuildingType buildType) {
        this.buildType = buildType;
    }

    public int getNumberOfRooms() {
        return numberOfRooms;
    }

    public void setNumberOfRooms(int numberOfRooms) {
        this.numberOfRooms = numberOfRooms;
    }

    public boolean getHasSolarPanels() {
        return hasSolarPanels;
    }

    public void setHasSolarPanels(boolean hasSolarPanels) {
        this.hasSolarPanels = hasSolarPanels;
    }
}
