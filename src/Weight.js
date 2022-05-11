// Functions to determine weightclass

export function getNum(str) {
    if (str == 'FLYWEIGHT'){
        return 1;
    }
    else if (str == 'BANTAMWEIGHT'){
        return 2;
    }
    else if (str == 'FEATHERWEIGHT'){
        return 3;
    }
    else if (str == 'LIGHTWEIGHT'){
        return 4;
    }
    else if (str == 'WELTERWEIGHT'){
        return 5;
    }
    else if (str == 'MIDDLEWEIGHT'){
        return 6;
    }
    else if (str == 'LIGHT HEAVYWEIGHT'){
        return 7;
    }
    else if (str == 'HEAVYWEIGHT'){
        return 8;
    }
    else if (str == 'WSTRAWWEIGHT'){
        return 9;
    }
    else if (str == 'WFLYWEIGHT'){
        return 10;
    }
    else if (str == 'WBANTAMWEIGHT'){
        return 11;
    }
}

export default getNum;