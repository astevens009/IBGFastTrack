package org.kemetkoder.astevens;

public class IBGBuildingDemo {

    public static void main(String[] args) {
	    Building parkingGarage = new Building();

	    // Adding dimensions to the garage
        // NOTE: Dimensions are in meters
	    parkingGarage.setBldngDim(new BuildingDimension(200, 200, 4));

	    // Displaying information about the garage
        System.out.println("\nThe building is a parking garage. It is a " +
                parkingGarage.getBuildType() + " building.");

        // Testing to see if the garage has solar panels
        if(parkingGarage.getHasSolarPanels())
            System.out.println("The parking garage has solar panels.");
        else
            System.out.println("The parking garage does not have solar panels.");

        // Display the dimensions of the parking garage
        System.out.println("The dimensions of the parking garage are " +
                parkingGarage.getBldngDim().getWidth() + " meters by " +
                parkingGarage.getBldngDim().getHeight() + " meters, and it has " +
                parkingGarage.getBldngDim().getNumberOfOuterWalls() + " outer walls.");

    }
}
