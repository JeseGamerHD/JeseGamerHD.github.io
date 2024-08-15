import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class GenerateImageTXT {

    private static List<String> imageNames = new ArrayList<>();

    public static void main(String[] args) {

        File folder = new File("images/screenshots/");
        File[] images = folder.listFiles();

        for (File file : images) {
            if (file.isFile()) {
                imageNames.add(file.getName());
            }
        }

        GenerateTXTFile();
    }

    private static void GenerateTXTFile() {

        try {
            FileWriter writer = new FileWriter("images.txt", false);
            String txtFileString = imageNames.stream().collect(Collectors.joining("\n"));
            writer.write(txtFileString);
            writer.close();

        } catch(IOException e) {
            System.out.println("Generating file failed...");
        }
    }
}