package org.kemetkoder.astevens;

import java.awt.*;

public class BuildingDimension extends Dimension {
    private int numberOfOuterWalls;

    public BuildingDimension(){
        this.height = 0;
        this.width = 0;
        this.numberOfOuterWalls = 0;
    }

    public BuildingDimension(int ht, int wt, int numOfWalls){
        this.height = ht;
        this.width = wt;
        this.numberOfOuterWalls = numOfWalls;
    }

    public int getNumberOfOuterWalls() {
        return numberOfOuterWalls;
    }

    public void setNumberOfOuterWalls(int numberOfOuterWalls) {
        this.numberOfOuterWalls = numberOfOuterWalls;
    }
}
