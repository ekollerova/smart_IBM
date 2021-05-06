
pole[10];
pozice = 0;
int suma;
int average = ;

public static void main(){
    while(1){
        saveData(waitingForData());
    }
}
public static int waitingForData(){

}

public static void saveData(int value){
    pole[pozice] = value;
    pozice = (pozice+1)%10;
}

class interval{
    int max = int.MIN
    int min = int.MAX
    int averAGE = 0

    private static int getAverage(int interval[]){
    int average = 0;
    for (int i = 0; i < interval.length; i++){
    average += pole[i]
    if(interval[i] > max){
    maX = interval[i]
}
if(interval[i] < min){
    min = interval[i]
}
}
return average = average/interval.length
}
}

class infoObj{
    int valuesArray[9]
    Interval inter
    Interval intervals[]
    int value
    int max
    int min
    boolean buy = false;

    public infoObj(Interval intervals[]){
    for(int i = 0; i < intervals.length;i++){
    valuesArray[i] = getAverage(intervals[i])
}
value = getAverage(intervals[intervals.length-1])
setFlagBuy()
}
public void setFlgBuy(){
    int countOfValues = 0;
    for(int i = 0; i < valuesArray.length; i++){
        if(value <valuesArray[i]){
            countOfValues++;
        }
    }

    bool rule2 = true
    for(int i = 2; i < intervals.length-1; i++){
        if(max >intervals[i].getMAX)
            rule2 = false
    }

    bool rule3 = true;
    for(int i = 0; i < intervals.length; i++){
        if(!(min <intervals[I].getMin/10))
            rule3 = false
    }
    if(countOfValues >= 5 && rule2&&rule3){
        buy = true
    }
}
}
