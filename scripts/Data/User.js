const USER_DATA_KEY = "PasswordCalculator-UserData";

class UserData
{
    rawPasswordRecords;
    charsetRecords;

    static CreateDefault()
    {
        let ud = new UserData();
        ud.rawPasswordRecords = Object.assign(builtinRawPasswordRecords);
        ud.charsetRecords = Object.assign(builtinCharsetRecords);
        return ud;
    }

    static Clear()
    {
        localStorage.clear();
    }

    static Load()
    {
        //this.Clear(); 
        
        let json = localStorage.getItem(USER_DATA_KEY);
        let userData = this.FromJson(json);
        if(userData == null)
        {
            userData = UserData.CreateDefault(); 
        }

        return userData;
    }
    static Save(userData)
    {
        let json = this.ToJson(userData);
        localStorage.setItem(USER_DATA_KEY, json);
    }

    static FromJson(json)
    {
        let userData = JSON.parse(json);

        if(userData == null) { return null; }
        //TODO блэт, ктож знал что класс JSON не умеет сохранять прототипы классов, только я не додумался до этого.
        //пришлось написать костыль, который по хорошему тоже бы переработать.
        //В общем приходится агрессивно вручную восстанавливать прототипы после загрузки.
        //Чтобы исправить нужно просто убрать все поведение из объектов, одних только данных вполне достаточно
        let charsetRecordKeys = Object.keys(userData.charsetRecords);
        for (let i = 0; i < userData.rawPasswordRecords.length; i++)
        {
            const element = userData.rawPasswordRecords[i];
            let obj = new RawPasswordRecord();
            userData.rawPasswordRecords[i] = Object.assign(obj, element);;
        }
        for (let i = 0; i < charsetRecordKeys.length; i++)
        {
            const element = userData.charsetRecords[charsetRecordKeys[i]];
            let obj = new CharsetRecord();
            userData.charsetRecords[charsetRecordKeys[i]] = Object.assign(obj, element);
        }

        //console.log(userData);

        return userData;
    }
    static ToJson(userData)
    {
        return JSON.stringify(userData);
    }
}

class UserSession
{
    data;
    masterPasswordHash = "";

    EnterMasterPassword(password)
    {
        //TODO доработать хеширование мастер пароля
        this.masterPasswordHash = GeneratePasswordWithDefaultHash(new RawPasswordRecord("Master", null, null, 256), builtinCharsetRecords, password);
        //console.log(this.masterPasswordHash);
    }
}