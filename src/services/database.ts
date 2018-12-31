import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseService {
    options: any = {
        name: 'chatbot.db',
        location: 'default'
    }


    public db: SQLiteObject;

    constructor(private sqlite: SQLite) {}

    public connectToDb(): void {
        console.log('database connected.');
        this.sqlite.create(this.options) 
            .then((db: SQLiteObject) => {
                this.db = db;
    
                this.db.executeSql('CREATE TABLE IF NOT EXISTS emotionScore(id INTEGER PREMARY KEY AUTOINSCREMENT, time DATETIME, score DOUBLE)', [])
                .then(() => {})
                .catch(() => {});
                
            })
            .catch(() => {});
    }

    public getDateRangeEntry(start: string, end: string):any {
        // no check for the input strings
        this.sqlite.create(this.options) 
            .then((db: SQLiteObject) => {
                this.db = db;
    
                this.db.executeSql('CREATE TABLE IF NOT EXISTS emotionScore(id INTEGER PREMARY KEY AUTOINSCREMENT, time DATETIME, score DOUBLE)', [])
                .then(() => {
                    this.db.executeSql("SELECT time, score FROM emotionScore WHERE time BETWEEN '"+ start + "' AND '"+ end + "'", [])
                    .then((data) => {
                        return data;
                    })
                    .catch(e => console.log(e));
                })
                .catch(() => {});
                
            })
            .catch(() => {});
    }

    public getAvgScore(start: string, end: string): number {
        this.sqlite.create(this.options) 
            .then((db: SQLiteObject) => {
                this.db = db;
    
                this.db.executeSql('CREATE TABLE IF NOT EXISTS emotionScore(id INTEGER PREMARY KEY AUTOINSCREMENT, time DATETIME, score DOUBLE)', [])
                .then(() => {
                    console.log("SELECT AVG(score) FROM emotionScore WHERE time BETWEEN '"+ start + "' AND '"+ end + "'");
                    this.db.executeSql("SELECT AVG(score) FROM emotionScore WHERE time BETWEEN '"+ start + "' AND '"+ end + "'", [])
                    .then((data) => {
                        return data;
                    })
                    .catch(e => console.log(e));
                })
                .catch(() => {});
                
            })
            .catch(() => {});
        return null;
    }

    // please add other methods related to database transaction needed
}
