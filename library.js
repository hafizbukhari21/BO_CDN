//transaction Data Report
let title = [
    "MTI|N-4|",
    "Processing Code|AN-6|",
    "Response Code|N-2|Iso-field 39",
    "Approval Code|AN-6|Iso-field 38",
    "PAN|AN-19|Iso-field 35",
    "Switch Receiving Date|yymmdd|",
    "Switching Receiving Time|Hhmm24ss|",
    "System Trace Audit Number|N-12|Iso-field 11",
    "RRN|AN-12|Iso-field 37",
    "Acq Par ID|AN-3|",
    "Iss Par ID|AN-3|",
    "Card Acceptor Name & Location|ANS-40|Iso-field 43",
    "Acq Institution Indentification|N-11|Iso-field 32",
    "Local Trx Date|yymmdd|Iso-field 13",
    "Local Trx Time|HHmm24ss|Iso-field 12",
    "Currency Code|N-3|Iso-field 49",
    "Trx Amount|N..12|Iso-field 4",
    "Card Acc Terminal Identity|AN-16|Iso-field 41",
    "Switching Bussiness Date|yymmdd|",
    "Internal Flag|N..2|",
    "Channel Type|AN-4|",
    "Destination Participant ID|AN..3|",
    "Destination Account Number|AN..28|",
    "Destination Institution Indetification Code|N..11|",
    "Admin Fee|AN..16|Iso-field 48",
    "Biller Amount|N..12|Biller Amount = Trx Amount-Admin Fee",
    "Principal Code|N-3|"

]


//EJ Report
let titleEJ = [
    "Local Trx Date|YYMMDD|",
    "Local Transaction Time|HHmm24ss|",
    "Primary Account Number|Masked Format<br>6-XXXXXX-4|",
    "ATMID|N-8|",
    "Location|ANS-50|",
    "Transaction Type|AN-2|",
    "Trace Number|N-6|",
    "Transaction Currency|A-3|",
    "Transaction Amount|N|",
    "Response Code|N-2|",
    "Bills Status Presented|A|",
    "Bills Status Taken|A|",
    "DeviceType_1|N-2|",
    "DeviceType_2|N-2|",
    "DeviceType_3|N-2|",
    "DeviceType_4|N-2|",
    "ATM Status Completion|N-1|",
    "States|N|",
]

//Cek Rekon

let titleRecon = [
    "Terminal ID||",
    "Tgl Transaksi||",
    "Jam Transaksi||",
    "RRN|Bit 37|",
    "Nomor Kartu||",
    "Kode Issuer|Bit 100|",
    "Nominal Trx di EJ||",
    "Nominal TRX di Switch||",
    "EJ RC||",
    "SWITCH RC||",
    "Kode Transaksi||",
    "Nama Transaksi||",
    "Kode Destination / Biller|Bit 127|",
    "Status Trx EJ||",
    "Status Trx Switch||",
    "Status Rekon||",
    "Deskripsi||",
    "Status Clearing||",
]


//transacion data detail
let title_Transaction_data_detail = [
    "Testing Transacion Data Detail MTI|N-4|",
    "Processing Code|AN-6|",
    "Response Code|N-2|Iso-field 39",
    "Approval Code|AN-6|Iso-field 38",
    "PAN|AN-19|Iso-field 35",
    "Switch Receiving Date|yymmdd|",
    "Switching Receiving Time|Hhmm24ss|",
    "System Trace Audit Number|N-12|Iso-field 11",
    "RRN|AN-12|Iso-field 37",
    "Acq Par ID|AN-3|",
    "Iss Par ID|AN-3|",
    "Card Acceptor Name & Location|ANS-40|Iso-field 43",
    "Acq Institution Indentification|N-11|Iso-field 32",
    "Local Trx Date|yymmdd|Iso-field 13",
    "Local Trx Time|HHmm24ss|Iso-field 12",
    "Currency Code|N-3|Iso-field 49",
    "Trx Amount|N..12|Iso-field 4",
    "Card Acc Terminal Identity|AN-16|Iso-field 41",
    "Switching Bussiness Date|yymmdd|",
    "Internal Flag|N..2|",
    "Channel Type|AN-4|",
    "Destination Participant ID|AN..3|",
    "Destination Account Number|AN..28|",
    "Destination Institution Indetification Code|N..11|",
    "Admin Fee|AN..16|Iso-field 48",
    "Biller Amount|N..12|Biller Amount = Trx Amount-Admin Fee",
    "Principal Code|N-3|"

]

let title_Invoice_data_detail = [
    "Column Indetifier|AN-2| Column Indetifier <br> DH: Column Data",
    "Message Type Indicator|N-4| Iso Message Type <br> 210,420,430",
    "Processing Code|AN-6| Iso Processing Code",
    "Response Code|N-2, N-2| Iso Response Code <br> Refer to ISO Response Code List. Khusus untuk transfer dari Acquirer Only, dapat berisi 2 RC, yaitu RC debet diikuti RC kredit (dipisahkan tanda koma",
    "Approval Code|AN-6| Iso-field 38",
    "Primary Account Number (PAN)|AN-19| ISO-Field 35 Subfield PAN (Byte 1 – 19) ",
    "Switching Received Date|yymmdd|",
    "Switching Received Time|HHmm24ss|",
    "System Trace Audit Number|N-12| ISO-Field 11 <br> at right-most six byte only (This one is STAN sent by Switch to Issuer)",
    "RRN|AN-12| Iso-field 37",
    "Acquirer Participant ID|AN-3| Acq Bank ID",
    "Issuer Participant ID|AN-3| Iss Bank ID",
    "Card Acceptor name & location|ANS-40| Iso-Field 43",
    "Acq Institution Identification Code |N-11| Iso-field 32",
    "Local trx Date|yymmdd|Iso-field 13",
    "Local trx Time|HHmmss24dd|Iso-field 12",
    "Transaction Currency Code|N-3|Iso-field 49",
    "Transaction Amount|N..12| Iso-field 4",
    "Card Acceptor Terminal Indenti|AN-16| Iso-field 41",
    "Switching Bussines Date|yymmdd| Switching Bussines Date",
    "Internal Flag|N..2|-",
    "Channel Type|AN-2|-",
    "Destination Participant ID|AN-3| Dest Bank ID",
    "Detination Account Number|AN-28| Dest Account Number <br> Hanya diisi jika bank berperan sebagai Destination(default: 0) Untuk transaksi pembayaran, field ini berisi ID Pembayaran dengan format left justified padded with spaces",
    "Destination Institution indetification code |N..11| Iso-field 127",
    "Admin fee|AN..16| Iso-field 48",
    "Biller Amount|N..12|-",
    "Principal code|N-3|-",
    "Approach Type|AN-1| Indikator jenis Approach: <br>Refer to Guiding Principle. <br>I : Issuer Approach <br>A : Acquirer Approach",
    "Tier Level|AN-1|-",
    "Tier Nominal|AN..10|-",
    "Rebate Percentage|AN..6|-",
    "Rebate Value|AN..10|",
    "Fee Cash Handling|AN..10| Nominal Fee Cash Handling <br>Biaya Cash Handling <br> Untuk transaksi penarikan tunai off-us HIMBARA<br>akan berisi biaya sesuai ketentuan bisnis, selain<br>ketentuan tersebut akan terisi 0.00<br>Contoh nilai: 1000.0",
    "Kewajiban|AN..10|Kewajiban Transaksi <br>Kewajiban settlement bank atas transaksi, <br>kewajiban berisikan penjumlahan: <br>• Kewajiban nominal transaksi<br>• Kewajiban biaya-biaya transaksi (jika ada)",
    "Hak|AN..10|Hak Transaksi <br>Hak settlement bank atas transaksi, hak settlement<br>mengacu ke ketentuan skema fee dan skema bisnis<br>yang berlaku. Hak settlement dapat berisikan:<br>• Hak atas nominal transaksi<br>    • Hak atas sharing fee biaya transaksi<br>• Hak atas biaya lain-lain (jika ada)",
    

]






















let parseLogic = `
    if(choosen==1) Parse("Input Transaction Data",title,";",isBiller_parse)
    else if(choosen==2) Parse("Input EJ",titleEJ,";",isBiller_parse)
    else if(choosen==3) Parse("Input Recon",titleRecon,"|",isBiller_parse)
    else if(choosen==4) Parse("Input Transaction Data Detail",title_Transaction_data_detail,";",isBiller_parse)
    else if(choosen==5) Parse("Input Invoice Data Detail",title_Invoice_data_detail,"|",isBiller_parse)



    //khusus biller code lihat di library
    else{
      let Biller = biller_lib.find(e=>e.code ==choosen)
      Parse(Biller.title,Biller.expression,"",isBiller_parse)
    }

`











