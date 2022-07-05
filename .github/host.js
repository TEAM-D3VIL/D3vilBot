input java,python,none.
input run python java.
run input.userbot.java.
import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Car temp[] = new Car[4];
        Scanner sc = new Scanner(System.in);
        for (int i = 0; i < 4; i++) {
            int a = sc.nextInt();
            sc.nextLine();
            String b = sc.nextLine();
            int c = sc.nextInt();
            int d = sc.nextInt();
            sc.nextLine();
            String e = sc.nextLine();
            Car carr = new Car(a, b, c, d, e);
            temp[i] = carr;
        }
        String env = sc.nextLine();
        String brand = sc.nextLine();
        if (findTestsPassedByEnv(temp, env) > 0) {
            System.out.println(findTestsPassedByEnv(temp, env));
        } else {
            System.out.println("There are no tests passed in this particular environment");
        }
        if (updateCarGrade(temp, brand) == null) {
            System.out.println("No Car is available with the specified brand");
        } else {
           System.out.println(updateCarGrade(temp, brand));
        }
    }

    private static int findTestsPassedByEnv(Car[] car, String environment) {
        int testspassed = 0;
        for (Car c : car) {
            String a=c.getEnvironment();
            if (a.equalsIgnoreCase(environment)) {
                testspassed += c.getNoOfTestsPassed();
            }
        }
        return testspassed;
    }

    private static Car updateCarGrade(Car[] car, String brand) {
        String rating;
        int temp;
        Car carr = null;
        for (Car c : car) {
            String a=c.getBrand();
            if (a.equalsIgnoreCase(brand)) {
                temp = (c.getNoOfTestsPassed() * 100) / c.getNoOfTestsConducted();
                if (temp >= 80) {
                    rating = "A1";
                } else {
                    rating = "B2";
                }
                c.setGrade(rating);
                carr = c;
            }
        }

        return carr;
    }
}

class Car {
    int cardid;
    String brand;
    int noOfTestsConducted;
    int noOfTestsPassed;
    String environment;
    String grade;

    public Car(int cardid, String brand, int noOfTestsConducted, int noOfTestsPassed, String environment) {
        super();
        this.cardid = cardid;
        this.brand = brand;
        this.noOfTestsConducted = noOfTestsConducted;
        this.noOfTestsPassed = noOfTestsPassed;
        this.environment = environment;
    }

    public int getCardid() {
        return cardid;
    }

    public void setCardid(int cardid) {
        this.cardid = cardid;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getNoOfTestsConducted() {
        return noOfTestsConducted;
    }

    public void setNoOfTestsConducted(int noOfTestsConducted) {
        this.noOfTestsConducted = noOfTestsConducted;
    }

    public int getNoOfTestsPassed() {
        return noOfTestsPassed;
    }

    public void setNoOfTestsPassed(int noOfTestsPassed) {
        this.noOfTestsPassed = noOfTestsPassed;
    }

    public String getEnvironment() {
        return environment;
    }

    public void setEnvironment(String environment) {
        this.environment = environment;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String toString() {
        return brand + "::" + grade;
    }

}
from java.userbot roobot.rut
  

                            import.bot = d3vilbot
                          java '
await: d3vilbot)(*_()+))":?
       in(str(.java)"
           print("java")
                            int(str.get(run.d3vilbot.rut
 )
                                {[[Project.userbot.rut":await"
                                os = input,java,python,linux,hack,php,html,.evortsgh
os=int(input)"print{java"
;os= input"java/?
in await print....
nonetypers.{error2.send_string[]|:")
            hack.sending..>
              none<in<python.userbot("""github.com/D3KRISH/D3vilUserbot )"/n"
                                     
                                     
                                     basd"78=hgj769tgjpUuY889nojJjkkhyyPOPUEDGTIOB99feorgiuuiriI[IipnuUYY=INT
                                     INT.print_string)
            none,
              hack
            java,
              python
            linux = 00.66666 
            tetmux = 99999.02
                                                os.evont.(ss).
                                                          linux(java,python,hack')
                                                                send.messege.(D3VIL_BOT_SUPPORT).os.edit
                                                                print(ss.get":await(int(str(java.get)
                                                                modul.d3vilbot
                                                                "plugins"
                                                                userbot'd3vilBot.
utis == (1,2.5,"1",[3.4],(4.3))
Max(ab)
  Max=min(tup)
markup = client.build_reply_markup(Button.inline(''))
 await client.send()



