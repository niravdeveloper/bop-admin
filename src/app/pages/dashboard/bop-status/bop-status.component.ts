import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-bop-status',
  templateUrl: './bop-status.component.html',
  styleUrls: ['./bop-status.component.scss']
})
export class BopStatusComponent implements OnInit {
  checked = true;

  mbvStatus: number;
  uaStatus: number;
  OGBStatus: number;
  IGBStatus: number;
  LAStatus: number;
  UIKStatus: number;
  UOKStatus: number;
  UICStatus: number;
  UOCStatus: number;
  UPRStatus: number;
  MPRStatus: number;
  MIKStatus: number;
  MOKStatus: number;
  LOCStatus: number;
  LICStatus: number;
  WHCStatus: number;
  WHCsec: boolean;
  CSRsec: boolean;
  CSRStatus: number;
  UBSRsec: boolean;
  UBSRStatus: number;
  LMRPCsec: boolean;
  LMRPCStatus: number;
  IGBbg: number;
  OGBbg: number;
  LIKStatus: number;
  LOKStatus: number;
  CIVStatus: number;
  KIVStatus: number;
  CCStatus: number;
  KCStatus: number;
  LPRStatus: number;
  TRStatus: number;
  KIVbg: number;
  KCbg: number;
  UOKbg: number;
  UIKbg: number;
  LOKbg: number;
  LIKbg: number;
  MBVbg: number;
  CIVbg: number;
  CCbg: number;
  UOCbg: number;
  UICbg: number;
  LOCbg: number;
  LICbg: number;
  uabg: number;
  LAbg: number;
  LMRPCbg: number;
  UBSRbg: number;
  CSRbg: number;
  UPRbg: number;
  MPRbg: number;
  LPRbg: number;
  TRbg: number;
  WHCbg: number;
  MOKbg: number;
  MIKbg: number;
  uBSRhpc: number;
  CsrHpc: number;
  LBSRsec: boolean;
  LBSRStatus: number;
  LBSRbg: number;
  LBSRhpc: number;
  trBorder: number;
  uprBorder: number;
  mprBorder: number;
  lprBorder: number;
  ubsrBorder: number;
  csrBorder: number;
  igbBorder: number;
  uokBorder: number;
  uocBorder: number;
  uicBorder: number;
  uaBorder: number;
  laBorder: number;
  whcBorder: number;
  kcBorder: number;
  ccBorder: number;
  kivBorder: number;
  civBorder: number;
  lokBorder: number;
  likBorder: number;
  uikBorder: number;
  mbvBorder: number;
  ogbBorder: number;
  lmrpcBorder: number;
  mikBorder: number;
  mokBorder: number;
  locBorder: number;
  licBorder: number;
  lbsrBorder: number;

  constructor() { }

  ngOnInit(): void {
  }

  getBorderClass(status) {
    if (status == 1) {
      return 'modelBorder-bleed'; // yellow
    } else {
      return 'modelNoBorder';
    }
  }

  getModelColor(status) {
    if (status == 1) {
      return 'rgb(0 204 153)'; // green
    } else if (status == 0) {
      return 'rgb(128 75 98)'; // red
    } else {
      return 'rgb(187, 170, 204)'; // grey
    }
  }
}
