import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'gb-admin-miembros',
  templateUrl: './admin-miembros.component.html',
  styleUrls: ['./admin-miembros.component.scss']
})
export class AdminMiembrosComponent implements OnInit {
  tableData: any[] = []
  firstInResponse: any = []
  lastInResponse: any = []
  prevStartAt: any = []
  paginationCount = 0
  disableNext = false
  disablePrev = true

  constructor(
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.getItems()
  }

  getItems(){
    this.db.collection('miembros', ref => ref
              .limit(20)
              .orderBy('registrodate', 'desc'))
              .snapshotChanges()
              .subscribe( resp => {
                if (!resp.length){
                  console.log('No hay coincidencias')
                  return false
                }

                this.firstInResponse = resp[0].payload.doc
                this.lastInResponse = resp[resp.length - 1].payload.doc

                this.tableData = []
                for (let item of resp){
                  this.tableData.push(item.payload.doc.data())
                }

                console.log(this.tableData)

                this.prevStartAt = []
                this.paginationCount = 0
                this.disableNext = false
                this.disablePrev = false

                this.prevStartAt.push(this.firstInResponse)
              }, err => {
                console.log(err)
              })
  }

  nextPage(){
    console.log('entro')
    this.disableNext = true
    this.db.collection('miembros', ref => ref
              .limit(20)
              .orderBy('registrodate', 'desc')
              .startAfter(this.lastInResponse))
              .get()
              .subscribe(response => {
                if (!response.docs.length){
                  this.disableNext = true
                  return
                }

                this.firstInResponse = response.docs[0];
                this.lastInResponse = response.docs[response.docs.length - 1];

                this.tableData = [];
                for (let item of response.docs){
                  this.tableData.push(item.data());
                }

                console.log(this.tableData)

                this.paginationCount++

                this.pushPrevStartAt(this.firstInResponse)

                this.disableNext = false
              }, err => {
                this.disableNext = false
              })
  }

  prevPage(){
    this.disablePrev = true

    this.db.collection('miembros', ref => ref
              .orderBy('registrodate', 'desc')
              .startAt(this.getprevStartAt())
              .endBefore(this.firstInResponse)
              .limit(20)
              ).get()
              .subscribe(response => {
                this.firstInResponse = response.docs[0]
                this.lastInResponse = response.docs[response.docs.length - 1]

                this.tableData = []
                for (let item of response.docs){
                  this.tableData.push(item.data())
                }

                console.log(this.tableData)

                this.paginationCount--

                this.popPrevStartAt(this.firstInResponse)

                this.disableNext = false
                this.disablePrev = false
              }, err => {
                this.disablePrev = false
              })
  }

  pushPrevStartAt(prevFirstDoc){
    this.prevStartAt.push(prevFirstDoc);
  }

  popPrevStartAt(prevFirstDoc){
    this.prevStartAt.forEach(element => {
      if (prevFirstDoc.data().id === element.data().id){
        element = null
      }
    })
  }

  getprevStartAt(){
    if (this.prevStartAt.length > (this.paginationCount + 1)){
      this.prevStartAt.splice(this.prevStartAt.length - 2, this.prevStartAt.length - 1)
    }
    return this.prevStartAt[this.paginationCount - 1];
  }

}
