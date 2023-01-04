import { Component, OnInit } from '@angular/core';
import * as faultTreeData from '../../../../assets/data/faultTreeData.json';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-fault-tree',
  templateUrl: './fault-tree.component.html',
  styleUrls: ['./fault-tree.component.scss']
})
export class FaultTreeComponent implements OnInit {
  searchForm: FormGroup;

  faultTreeChartOptions: any;
  faultTreeChartData: any;

  signals = [
    {
      value: 'E0',
      display: 'E0-LCL-Y',
    },
    {
      value: 'E1',
      display: 'E1-UAP-OCS-Y',
    },
    {
      value: 'E2',
      display: 'E2-LAP-OCS-Y',
    },
    {
      value: 'E3',
      display: 'E3-UCL-Y',
    },
    {
      value: 'E4',
      display: 'E4-UPR-OCLUS-Y',
    },
    {
      value: 'E5',
      display: 'E5-MPR-OCLUS-Y',
    },
    {
      value: 'E6',
      display: 'E6-UKL-Y',
    },
    {
      value: 'E7',
      display: 'E7-LKL-Y',
    },
    {
      value: 'E8',
      display: 'E8-LPR-OCLUS-Y',
    },
    {
      value: 'E9',
      display: 'E9-LCL-B',
    },
    {
      value: 'E10',
      display: 'E10-UAP-OCS-B',
    },
    {
      value: 'E11',
      display: 'E11-LAP-OCS-B',
    },
    {
      value: 'E12',
      display: 'E12-UCL-B',
    },
    {
      value: 'E13',
      display: 'E13-UPR-OCLUS-B',
    },
    {
      value: 'E14',
      display: 'E14-MPR-OCLUS-B',
    },
    {
      value: 'E15',
      display: 'E15-UKL-B',
    },
    {
      value: 'E16',
      display: 'E16-LKL-B',
    },
    {
      value: 'E17',
      display: 'E17-LPR-OCLUS-B',
    },
    {
      value: 'E18',
      display: 'E18-UBSR-HP-OCLUS-Y',
    },
    {
      value: 'E19',
      display: 'E19-UBSR-LP-OCLUS-Y',
    },
    {
      value: 'E20',
      display: 'E20-LBSR-HP-OCLUS-Y',
    },
    {
      value: 'E21',
      display: 'E21-LBSR-LP-OCLUS-Y',
    },
    {
      value: 'E22',
      display: 'E22-UBSR-HP-OCLUS-B',
    },
    {
      value: 'E23',
      display: 'E23-UBSR-LP-OCLUS-B',
    },
    {
      value: 'E24',
      display: 'E24-LBSR-HP-OCLUS-B',
    },
    {
      value: 'E25',
      display: 'E25-LBSR-LP-OCLUS-B',
    },
    {
      value: 'E26',
      display: 'E26-CSR-HP-OC-Y',
    },
    {
      value: 'E27',
      display: 'E27-CSR-LP-OC-Y',
    },
    {
      value: 'E28',
      display: 'E28-CSR-HP-OC-B',
    },
    {
      value: 'E29',
      display: 'E29-CSR-LP-OC-B',
    },
    {
      value: 'E30',
      display: 'E30-RISER PRI-UNLOCK-Y',
    },
    {
      value: 'E31',
      display: 'E31-RISER SEC-UNLOCK-Y',
    },
    {
      value: 'E32',
      display: 'E32-RISER PRI-UNLOCK-B',
    },
    {
      value: 'E33',
      display: 'E33-RISER SEC-UNLOCK-B',
    },
    {
      value: 'E34',
      display: 'E34-GRL-Y',
    },
    {
      value: 'E35',
      display: 'E35-GRL-B',
    },
    {
      value: 'E36',
      display: 'E36-RSR CON-PRI-UNLCK-ROV',
    },
    {
      value: 'E37',
      display: 'E37-RSR CON-SEC-UNLCK-ROV',
    },
    {
      value: 'E38',
      display: 'E38-UPR-ROV',
    },
    {
      value: 'E39',
      display: 'E39-UBSR-C- ROV',
    },
    {
      value: 'E40',
      display: 'E40-CSR-C-ROV',
    },
    {
      value: 'E41',
      display: 'E41-UBSR CS-S-LCK-ROV',
    },
    {
      value: 'E42',
      display: 'E42-HOTLINE TO YELLOW',
    },
    {
      value: 'E43',
      display: 'E43-BL COND TO YELL',
    },
    {
      value: 'E44',
      display: 'E44-UBSR-DM-AS',
    },
    {
      value: 'E45',
      display: 'E45-CSR-DM-AS',
    },
    {
      value: 'E46',
      display: 'E46-C/K VALVES-DM-AS',
    },
    {
      value: 'E47',
      display: 'E47-EMER HYD SUPPLY',
    },
    {
      value: 'E48',
      display: 'E48-YELL COND TO YP',
    },
    {
      value: 'E49',
      display: 'E49-HOTLINE TO BLUE',
    },
    {
      value: 'E50',
      display: 'E50-BLUE  COND TO BP',
    },
    {
      value: 'E51',
      display: 'E51-YELL COND TO BP',
    },
    {
      value: 'E52',
      display: 'E52-DRILLER STATION',
    },
    {
      value: 'E53',
      display: 'E53-TOOLPUSHER ST',
    },
    {
      value: 'E54',
      display: 'E54-SUBSEA STATION',
    },
    {
      value: 'E55',
      display: 'E55-LMRP ACC IND',
    },
    {
      value: 'E56',
      display: 'E56-SHEAR ACC IND',
    },
    {
      value: 'E57',
      display: 'E57-EMER ACC SUP IND',
    },
    {
      value: 'E58',
      display: 'E58-YPOD PRESS IND',
    },
    {
      value: 'E59',
      display: 'E59-BPOD PRESS IND',
    },
    {
      value: 'E60',
      display: 'E60-YPOD FLOW',
    },
    {
      value: 'E61',
      display: 'E61-BPOD FLOW',
    },
    {
      value: 'E62',
      display: 'E62-SURF FLOW',
    },
    {
      value: 'YPOD SLND PRESS IND',
      display: 'E63',
    },
    {
      value: 'E64',
      display: 'E64-BPOD SLND PRESS IND',
    },
    {
      value: 'E65',
      display: 'E65-YPOD 3K REG',
    },
    {
      value: 'E66',
      display: 'E66-YPOD REG MANIFOLD',
    },
    {
      value: 'E67',
      display: 'E67-YPOD ANN REG',
    },
    {
      value: 'E68',
      display: 'E68-YPOD RISCN REG',
    },
    {
      value: 'E69',
      display: 'E69-YPOD STKCN REG',
    },
    {
      value: 'E70',
      display: 'E70-BPOD 3K REG',
    },
    {
      value: 'E71',
      display: 'E71-BPOD REG MANIFOLD',
    },
    {
      value: 'E72',
      display: 'E72-BPOD ANN REG',
    },
    {
      value: 'E73',
      display: 'E73-BPOD RISCN REG',
    },
    {
      value: 'E74',
      display: 'E74-BPOD STKCN REG',
    },
    {
      value: 'E75',
      display: 'E75-LBSR-C- ROV',
    },
    {
      value: 'E76',
      display: 'E76-LBSR CS-S-LCK-ROV',
    },
    {
      value: 'E77',
      display: 'E77-MKL-Y',
    },
    {
      value: 'E78',
      display: 'E78-MKL-B',
    },
  ];

  componentList = [
    {
      display: 'Component A',
      value: 'Component A',
    },
    {
      display: 'Component B',
      value: 'Component B',
    },
    {
      display: 'Component C',
      value: 'Component C',
    },
  ];

  gateList = [
    {
      display: 'G0-BOP_API_COMPLIANCE ',
      value: 'G0',
    },
    {
      display: 'G1-API S53 RULE SECTION 7.1.3.1.1',
      value: 'G1',
    },
    {
      display: 'G2-SEAL ON TUBES 7.1.3.1.1A',
      value: 'G2',
    },
    {
      display: 'G3-SEAL ON TUBES-Y',
      value: 'G3',
    },
    {
      display: 'G4-SEAL ON TUBES-B',
      value: 'G4',
    },
    {
      display: 'G5-C/SEAL PIPE &amp; CIRCULATE-Y',
      value: 'G5',
    },
    {
      display: 'G6-C/SEAL CSG &amp; CIRC-Y',
      value: 'G6',
    },
    {
      display: 'G7-C/SEAL PIPE &amp; CIRCULATE-B',
      value: 'G7',
    },
    {
      display: 'G8-C/SEAL CSG &amp; CIRC-B',
      value: 'G8',
    },
    {
      display: 'G9-C/SEAL PIPE-AN-C-Y',
      value: 'G9',
    },
    {
      display: 'G10-UCL-U-AN-Y',
      value: 'G10',
    },
    {
      display: 'G11-LCL-U-AN-PR-Y',
      value: 'G11',
    },
    {
      display: 'G12-ISO= UCL-PIPE-Y',
      value: 'G12',
    },
    {
      display: 'G13-ISO -LCL-PIPE-Y',
      value: 'G13',
    },
    {
      display: 'G14-C/SEAL PIPE-AN/PR-K-Y',
      value: 'G14',
    },
    {
      display: 'G15-UKL-U-AN-Y',
      value: 'G15',
    },
    {
      display: 'G16-LKL-U-AN-PR-Y',
      value: 'G16',
    },
    {
      display: 'G17-ISO-U-KILL-PIPE-Y',
      value: 'G17',
    },
    {
      display: 'G18-ISO-L-KILL-PIPE-Y',
      value: 'G18',
    },
    {
      display: 'G19-C/SEAL CSG-AN-C-Y',
      value: 'G19',
    },
    {
      display: 'G20-C/SEAL CSG-AN-K-Y',
      value: 'G20',
    },
    {
      display: 'G21-LCL-U-AN-Y',
      value: 'G21',
    },
    {
      display: 'G22-ISO ABOVE LCL-CSG-Y',
      value: 'G22',
    },
    {
      display: 'G23-LKL-U-AN-Y',
      value: 'G23',
    },
    {
      display: 'G24-ISO-L-KILL-CSG-Y',
      value: 'G24',
    },
    {
      display: 'G25-C/SEAL PIPE-AN-C-B',
      value: 'G25',
    },
    {
      display: 'G26-UCL-U-AN-B',
      value: 'G26',
    },
    {
      display: 'G27-LCL-U-AN-PR-B',
      value: 'G27',
    },
    {
      display: 'G28-ISO ABOVE UCL-PIPE-B',
      value: 'G28',
    },
    {
      display: 'G29-ISO ABOVE LCL-PIPE-B',
      value: 'G29',
    },
    {
      display: 'G30-C/SEAL PIPE-AN/PR-K-B',
      value: 'G30',
    },
    {
      display: 'G31-UKL-U-AN-B',
      value: 'G31',
    },
    {
      display: 'G32-LKL-U-AN-PR-B',
      value: 'G32',
    },
    {
      display: 'G33-ISO-U-KILL-PIPE-B',
      value: 'G33',
    },
    {
      display: 'G34-ISO-L-KILL-PIPE-B',
      value: 'G34',
    },
    {
      display: 'G35-ISO CHOKE-CSG-B',
      value: 'G35',
    },
    {
      display: 'G36-C/SEAL CSG-AN-C-B',
      value: 'G36',
    },
    {
      display: 'G37-LCL-U-AN-B',
      value: 'G37',
    },
    {
      display: 'G38-ISO-U-KILL-CSG-B',
      value: 'G38',
    },
    {
      display: 'G39-C/SEAL CSG-AN-K-B',
      value: 'G39',
    },
    {
      display: 'G40-LKL-U-AN-B',
      value: 'G40',
    },
    {
      display: 'G41-API S53 RULE 7.1.3.1.1.B',
      value: 'G41',
    },
    {
      display: 'G42-C/SEAL OPEN HOLE',
      value: 'G42',
    },
    {
      display: 'G43-API S53 RULE 7.1.3.1.1.C',
      value: 'G43',
    },
    {
      display: 'G44-C/SEAL OPEN HOLE-Y',
      value: 'G44',
    },
    {
      display: 'G45-C/SEAL OPEN HOLE-B',
      value: 'G45',
    },
    {
      display: 'G46-C/SEAL OPEN HOLE-BSR-C-Y',
      value: 'G46',
    },
    {
      display: 'G47-C/SEAL OPEN HOLE-BSR-K-Y',
      value: 'G47',
    },
    {
      display: 'G48-UCL-U-BSR-Y',
      value: 'G48',
    },
    {
      display: 'G49-LCL-U-BSR-Y',
      value: 'G49',
    },
    {
      display: 'G50-UKL-U-BSR-Y',
      value: 'G50',
    },
    {
      display: 'G51-LKL-U-BSR-Y',
      value: 'G51',
    },
    {
      display: 'G52-UBSR HP/LP-Y',
      value: 'G52',
    },
    {
      display: 'G53-LBSR-HP/LP-Y',
      value: 'G53',
    },
    {
      display: 'G54-ISO ABOVE LCL-BSR-Y',
      value: 'G54',
    },
    {
      display: 'G55-ISO ABOVE LKL-BSR-Y',
      value: 'G55',
    },
    {
      display: 'G56-C/SEAL OPEN HOLE-BSR-C-B',
      value: 'G56',
    },
    {
      display: 'G57-UCL-U-BSR-B',
      value: 'G57',
    },
    {
      display: 'G58-LCL-U-BSR-B',
      value: 'G58',
    },
    {
      display: 'G59-UBSR HP/LP-B',
      value: 'G59',
    },
    {
      display: 'G60-LBSR-HP/LP-B',
      value: 'G60',
    },
    {
      display: 'G61-ISO ABOVE LCL-BSR-B',
      value: 'G61',
    },
    {
      display: 'G62-C/SEAL OPEN HOLE-BSR-K-B',
      value: 'G62',
    },
    {
      display: 'G63-UKL-U-BSR-B',
      value: 'G63',
    },
    {
      display: 'G64-LKL-U-BSR-B',
      value: 'G64',
    },
    {
      display: 'G65-ISO ABOVE LKL-BSR-B',
      value: 'G65',
    },
    {
      display: 'G66-STRIP DRILL STRING',
      value: 'G66',
    },
    {
      display: 'G67-API S53 RULE 7.1.3.1.1.D',
      value: 'G67',
    },
    {
      display: 'G68-STRIP DR STR-Y',
      value: 'G68',
    },
    {
      display: 'G69-STRIP DR STRNG-B',
      value: 'G69',
    },
    {
      display: 'G70-STRIP DR STR-UA-Y',
      value: 'G70',
    },
    {
      display: 'G71-STRIP DR STR-LA-Y',
      value: 'G71',
    },
    {
      display: 'G72-STRIP DR STR-UA-B',
      value: 'G72',
    },
    {
      display: 'G73-STRIP DR STR-LA-B',
      value: 'G73',
    },
    {
      display: 'G74-NO C/K LINE-Y',
      value: 'G74',
    },
    {
      display: 'G75-NO C/K LINES-BL',
      value: 'G75',
    },
    {
      display: 'G76-HANGOFF',
      value: 'G76',
    },
    {
      display: 'G77-API S53 RULE 7.1.3.1.1.E',
      value: 'G77',
    },
    {
      display: 'G78-HANGOFF-Y',
      value: 'G78',
    },
    {
      display: 'G79-HANGOFF-B',
      value: 'G79',
    },
    {
      display: 'G80-HANGOFF-LPR-Y',
      value: 'G80',
    },
    {
      display: 'G81-HANGOFF-MPR-Y',
      value: 'G81',
    },
    {
      display: 'G82-HANGOFF-UPR-Y',
      value: 'G82',
    },
    {
      display: 'G83-HANGOFF-LPR-B',
      value: 'G83',
    },
    {
      display: 'G84-HANGOFF-MPR-B',
      value: 'G84',
    },
    {
      display: 'G85-HANGOFF-UPR-B',
      value: 'G85',
    },
    {
      display: 'G86-SEAL-UPR-LAP-UAP-MPR-Y',
      value: 'G86',
    },
    {
      display: 'G87-C/K &amp; SEAL-Y',
      value: 'G87',
    },
    {
      display: 'G88-LWR CHK OR SEAL-Y',
      value: 'G88',
    },
    {
      display: 'G89-LWR-KILL-SEAL-Y',
      value: 'G89',
    },
    {
      display: 'G90-SEAL-LAP-UAP-UPR-Y',
      value: 'G90',
    },
    {
      display: 'G91-SEAL-LPR-LAP-UAP-UPR',
      value: 'G91',
    },
    {
      display: 'G92-SEAL-UPR-LAP-UAP-MPR-B',
      value: 'G92',
    },
    {
      display: 'G93-C/K &amp; SEAL-B',
      value: 'G93',
    },
    {
      display: 'G94-LWR CHOKE OR SEAL-B',
      value: 'G94',
    },
    {
      display: 'G95-LWR-KILL-SEAL-B',
      value: 'G95',
    },
    {
      display: 'G96-SEAL-LAP-UAP-UPR-B',
      value: 'G96',
    },
    {
      display: 'G97-SEAL-LPR-LAP-UAP-UPR-B',
      value: 'G97',
    },
    {
      display: 'G98-C/K OR SEAL-Y',
      value: 'G98',
    },
    {
      display: 'G99-LKL OR SEALING-Y',
      value: 'G99',
    },
    {
      display: 'G100-LCL OR SEAL-Y',
      value: 'G100',
    },
    {
      display: 'G101-SEAL-LPR-MPR-LAP-UAP-Y',
      value: 'G101',
    },
    {
      display: 'G102-SEAL-MPR-LAP-UAP-Y',
      value: 'G102',
    },
    {
      display: 'G103-C/K OR SEAL-B',
      value: 'G103',
    },
    {
      display: 'G104-LKL OR SEALING-B',
      value: 'G104',
    },
    {
      display: 'G105-LCL OR SEAL-B',
      value: 'G105',
    },
    {
      display: 'G106-SEAL-LPR-MPR-LAP-UAP-B',
      value: 'G106',
    },
    {
      display: 'G107-SEAL-MPR-LAP-UAP-B',
      value: 'G107',
    },
    {
      display: 'G108-SHR/SEAL DRILLPIPE',
      value: 'G108',
    },
    {
      display: 'G109-RISER DISCONNECT',
      value: 'G109',
    },
    {
      display: 'G110-SHEAR/SEAL DP-Y',
      value: 'G110',
    },
    {
      display: 'G111-CSR-CUT-BSR-SEAL -Y',
      value: 'G111',
    },
    {
      display: 'G112-CSR-CUT-Y',
      value: 'G112',
    },
    {
      display: 'G113-UBSR-CUT-SEAL-Y',
      value: 'G113',
    },
    {
      display: 'G114-SHEAR/SEAL DP-B',
      value: 'G114',
    },
    {
      display: 'G115-CSR-CUT-UBSR-SEAL -B',
      value: 'G115',
    },
    {
      display: 'G116-CSR-CUT-B',
      value: 'G116',
    },
    {
      display: 'G117-UBSR-CUT-SEAL-B',
      value: 'G117',
    },
    {
      display: 'G118-RISER DISCON-Y',
      value: 'G118',
    },
    {
      display: 'G119-RISER DISCON-B',
      value: 'G119',
    },
    {
      display: 'G120-API S53 RULE 7.1.3.1.F',
      value: 'G120',
    },
    {
      display: 'G121-API S53 RULE 7.1.3.1.1.G',
      value: 'G121',
    },
    {
      display: 'G122-CIRC-DR-PIPE-DISCON',
      value: 'G122',
    },
    {
      display: 'G123-API S53 RULE 7.1.3.1.1.H',
      value: 'G123',
    },
    {
      display: 'G124-CIRC-DR-PIPE-DISCON-Y',
      value: 'G124',
    },
    {
      display: 'G125-NO UPR &amp; BSR-Y',
      value: 'G125',
    },
    {
      display: 'G126-NO MPR OR BSR TO ISO-Y',
      value: 'G126',
    },
    {
      display: 'G127-NO LPR OR BSR TO ISO-Y',
      value: 'G127',
    },
    {
      display: 'G128-NO C/K HGOFF-UPR-BSR-Y',
      value: 'G128',
    },
    {
      display: 'G129-NO C/K LINE-YL',
      value: 'G129',
    },
    {
      display: 'G130-NO C/K LINE-MCL_Y',
      value: 'G130',
    },
    {
      display: 'G131-NO BSR OR NO CIRC-Y',
      value: 'G131',
    },
    {
      display: 'G132-UBSR OR NO CIRC-Y',
      value: 'G132',
    },
    {
      display: 'G133-LBSR OR NO CIRC-Y',
      value: 'G133',
    },
    {
      display: 'G134-MPR-C/K UBSR-Y',
      value: 'G134',
    },
    {
      display: 'G135-NO C/K TO MPR &amp; LBSR-Y',
      value: 'G135',
    },
    {
      display: 'G136-NOGO DN KL &amp; UP CL-Y',
      value: 'G136',
    },
    {
      display: 'G137-NOGO DN CL &amp; UP KL',
      value: 'G137',
    },
    {
      display: 'G138-NO BSR OR CIRC-B',
      value: 'G138',
    },
    {
      display: 'G139-UBSR OR NO CIRC LPR-Y',
      value: 'G139',
    },
    {
      display: 'G140-LBSR OR NO CIRC LPR-Y',
      value: 'G140',
    },
    {
      display: 'G141-CIRC-DR-PIPE-DISCON-B',
      value: 'G141',
    },
    {
      display: 'G142-NO UPR &amp; BSR-B',
      value: 'G142',
    },
    {
      display: 'G143-NO MPR OR BSR TO ISO-B',
      value: 'G143',
    },
    {
      display: 'G144-NO LPR OR BSR  TO ISO-B',
      value: 'G144',
    },
    {
      display: 'G145-NO C/K HGOFF-UPR-BSR-B',
      value: 'G145',
    },
    {
      display: 'G146-NO C/K LINE-ISO',
      value: 'G146',
    },
    {
      display: 'G147-NO C/K LINE-MCL_B',
      value: 'G147',
    },
    {
      display: 'G148-NO BSR OR NO CIRC-B',
      value: 'G148',
    },
    {
      display: 'G149-UBSR OR NO CIRC-B',
      value: 'G149',
    },
    {
      display: 'G150-LBSR OR NO CIRC-B',
      value: 'G150',
    },
    {
      display: 'G151-MPR-C/K UBSR-B',
      value: 'G151',
    },
    {
      display: 'G152-NO C/K  TO MPR &amp; LBSR-B',
      value: 'G152',
    },
    {
      display: 'G153-NOGO DN KL &amp; UP CL-B',
      value: 'G153',
    },
    {
      display: 'G154-NOGO DN CL &amp; UP KL1',
      value: 'G154',
    },
    {
      display: 'G155-NO BSR OR CIRC -B',
      value: 'G155',
    },
    {
      display: 'G156-UBSR OR NO CIRC LPR-B',
      value: 'G156',
    },
    {
      display: 'G157-LBSR OR NO CIRC LPR-B',
      value: 'G157',
    },
    {
      display: 'G158-NOGO DN KL OR UP CL-B',
      value: 'G158',
    },
    {
      display: 'G159-NO LCL OR UCL-B',
      value: 'G159',
    },
    {
      display: 'G160-CIRC TRAPPED GAS',
      value: 'G160',
    },
    {
      display: 'G161-API-ROV-DMAS',
      value: 'G161',
    },
    {
      display: 'G162-CIRC TRAP GAS-Y',
      value: 'G162',
    },
    {
      display: 'G163-GBL &amp; ISO W/ANN-Y',
      value: 'G163',
    },
    {
      display: 'G164-UCL ISO W/UBSR-Y',
      value: 'G164',
    },
    {
      display: 'G165-CIRC TRAP GAS-B',
      value: 'G165',
    },
    {
      display: 'G166-GBL &amp; ISO W/ANN-B',
      value: 'G166',
    },
    {
      display: 'G167-UCL ISO W/UBSR-B',
      value: 'G167',
    },
    {
      display: 'G168-APIS53 CLASS 5 REQ',
      value: 'G168',
    },
    {
      display: 'G169-ROV OR DMAS',
      value: 'G169',
    },
    {
      display: 'G170-API53 CLASS 5 -Y',
      value: 'G170',
    },
    {
      display: 'G171-MIN 1 ANN-Y',
      value: 'G171',
    },
    {
      display: 'G172-MIN 2 PIPE RAM-Y',
      value: 'G172',
    },
    {
      display: 'G173-CSR HP/LP-Y',
      value: 'G173',
    },
    {
      display: 'G174-SHR RAM (CSR/BSR)-Y',
      value: 'G174',
    },
    {
      display: 'G175-API53 CLASS 5 -B',
      value: 'G175',
    },
    {
      display: 'G176-MIN 1 ANN-B',
      value: 'G176',
    },
    {
      display: 'G177-MIN 2 PIPE RAM-B',
      value: 'G177',
    },
    {
      display: 'G178-CSR HP/LP-B',
      value: 'G178',
    },
    {
      display: 'G179-SHR RAM (CSR/BSR)-B',
      value: 'G179',
    },
    {
      display: 'G180-ROV RULE',
      value: 'G180',
    },
    {
      display: 'G181-DM/AS &amp; EMERGENCY  HYD SUPPLY',
      value: 'G181',
    },
    {
      display: 'G182-LMRP-UNLATCH-ROV',
      value: 'G182',
    },
    {
      display: 'G183-P RAM &amp; SH RAM-ROV',
      value: 'G183',
    },
    {
      display: 'G184-DEADMAN-AUTOSHR',
      value: 'G184',
    },
    {
      display: 'G185-DM/AS',
      value: 'G185',
    },
    {
      display: 'G186-API S53 CTRL POD',
      value: 'G186',
    },
    {
      display: 'G187-API53 UMBLICAL',
      value: 'G187',
    },
    {
      display: 'G188-API53 CNTRL ST REQ',
      value: 'G188',
    },
    {
      display: 'G189-MEASUREMENT DEV',
      value: 'G189',
    },
    {
      display: 'G190-YELLOW POD',
      value: 'G190',
    },
    {
      display: 'G191-BLUE POD',
      value: 'G191',
    },
    {
      display: 'G192-UMB SUPPLY-YP',
      value: 'G192',
    },
    {
      display: 'G193-UMB SUPPLY-BP',
      value: 'G193',
    },
    {
      display: 'G194-REMOTE STATION',
      value: 'G194',
    },
    {
      display: 'G195-POD SUPPLY PRESS INDICATION',
      value: 'G195',
    },
    {
      display: 'G196-FLOWMETER',
      value: 'G196',
    },
    {
      display: 'G197-B/Y FLOWMTR',
      value: 'G197',
    },
    {
      display: 'G198-LBSR CUT/ UBSR SEAL-Y',
      value: 'G198',
    },
    {
      display: 'G199-LBSR CUT/UBSR SEAL-B',
      value: 'G199',
    },
    {
      display: 'G2001/2 SHEAR RAM-Y',
      value: 'G200',
    },
    {
      display: 'G201-1/2 SHEAR RAM-B',
      value: 'G201',
    },
    {
      display: 'G202-NO GO CL OR LKL-Y',
      value: 'G202',
    },
    {
      display: 'G203-NOGO ON CL-Y',
      value: 'G203',
    },
    {
      display: 'G204-NO UP OR DOWN CL OR LK-B',
      value: 'G204',
    },
    {
      display: 'G205-NO GO CL-B',
      value: 'G205',
    },
    {
      display: 'G206-SLND PILOT PRESS INDICATION',
      value: 'G206',
    },
    {
      display: 'G207-YPOD REGULATOR IND',
      value: 'G207',
    },
    {
      display: 'G208-CNTRL POD REGULATOR IND',
      value: 'G208',
    },
    {
      display: 'G209-BPOD REGULATOR IND',
      value: 'G209',
    },
    {
      display: 'G210-MKL-LCL-Y',
      value: 'G210',
    },
    {
      display: 'G211-MINIMUM 1 PR',
      value: 'G211',
    },
    {
      display: 'MIN 2 SR',
      value: 'G212',
    },
    {
      display: 'G213-MIN 2 SR TO CLS AND LK',
      value: 'G213',
    },
    {
      display: 'G214-MKL-U-AN-PR-Y',
      value: 'G214',
    },
    {
      display: 'G215-ISO-M-KILL-PIPE-Y',
      value: 'G215',
    },
    {
      display: 'G216-MKL-U-AN-Y',
      value: 'G216',
    },
    {
      display: 'G217-ISO-M-KILL-CSG-Y',
      value: 'G217',
    },
    {
      display: 'G218-MKL-U-AN-PR-B',
      value: 'G218',
    },
    {
      display: 'G219-ISO-M-KILL-PIPE-B',
      value: 'G219',
    },
    {
      display: 'G220-MKL-U-AN-B',
      value: 'G220',
    },
    {
      display: 'G221-ISO-M-KILL-CSG-B',
      value: 'G221',
    },
    {
      display: 'G222-MKL-U-BSR-Y',
      value: 'G222',
    },
    {
      display: 'G223-ISO ABOVE MKL-BSR-Y',
      value: 'G223',
    },
    {
      display: 'G224-ISOLATE ABOVE C/K-Y',
      value: 'G224',
    },
    {
      display: 'G225-MKL-U-BSR-B',
      value: 'G225',
    },
    {
      display: 'G226-ISO ABOVE MKL-BSR-B',
      value: 'G226',
    },
    {
      display: 'G227-ISOLATE ABOVE C/K-B',
      value: 'G227',
    },
    {
      display: 'G228-MKL OR SEAL-Y',
      value: 'G228',
    },
    {
      display: 'G229-MKL OR SEAL-B',
      value: 'G229',
    },
    {
      display: 'G230-UBSR -CUT-SEAL-Y',
      value: 'G230',
    },
    {
      display: 'G231-UBSR -CUT-SEAL-B',
      value: 'G231',
    },
    {
      display: 'G232-NO GO UP KILL-Y',
      value: 'G232',
    },
    {
      display: 'G233-NO GO UP KILL-B',
      value: 'G233',
    },
    {
      display: 'G234-NO GO DOWN KILL-Y',
      value: 'G234',
    },
    {
      display: 'G235-LKL-UCL-Y',
      value: 'G235',
    },
    {
      display: 'G236-MKL-LCL-B',
      value: 'G236',
    },
    {
      display: 'G237-LKL-UCL-B',
      value: 'G237',
    },
    {
      display: 'G238-NO GO DOWN KILL-B',
      value: 'G238',
    },
  ];

  constructor(private http: HttpClient) {
    this.searchForm = new FormGroup({
      podSelect: new FormControl(''),
      semSelect: new FormControl(''),      
      functionSelect: new FormControl(''),
      componentSelect: new FormControl(''),
      // componentSelectBH: new FormControl(''),
      // gateSelectBH: new FormControl(''),
      // componentSelectwa: new FormControl(''),
      // functionSelectwa: new FormControl(''),
    });

   }

  ngOnInit(): void {
    this.getFaultTreeData();
  }

  setOptions() {
    this.faultTreeChartOptions = {
      title: {
        name: 'Fault Tree Diagram',
        show: true,
      },
      tooltip: {
        trigger: 'item',
        show: true,
        showContent: true,
        triggerOn: 'mousemove',
        formatter: '{c}',
        // valueFormatter: "(value)=>value.toFixed(2)+'%'",
      },

      series: [
        {
          type: 'tree',
          data: [this.faultTreeChartData],
          colorBy: 'data',
          left: '9%',
          right: '9%',
          top: '8%',
          bottom: '20%',
          // symbol: 'roundRect',
          symbolSize: 12,
          orient: 'TB',
          // edgeShape: 'polyline',
          expandAndCollapse: true,
          roam: true,
          initialTreeDepth: 2,
          itemStyle: {
            color: '#00E3A9',
          },
          lineStyle: {
            width: 2,
            shadowBlur: 4,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
          label: {
            // position: 'insideRight',
            position: ['90%', '-10%'],
            verticalAlign: 'top',
            align: 'left',
            fontSize: 8,
            // distance: 20,
            color: 'rgba(255, 255, 255, 0.5)',
            borderColor: 'rgba(0, 227, 169, 0.5)',
            // color: ['#942e38', '#aaa', '#269f3c'], //'rgba(255, 255, 255, 0.5)',
            // borderColor: ['#942e38', '#aaa', '#269f3c'],
            borderWidth: 1,
            padding: 2,
            width: 100,
            overflow: 'break',
            // ellipsis:"..."
            show: true,
          },

          leaves: {
            label: {
              position: 'bottom',
              verticalAlign: 'bottom',
              align: 'center',
              fontSize: 8,
              distance: 35,
              color: 'rgba(255, 255, 255, 0.5)',
              // borderColor: ['#942e38', '#aaa', '#269f3c'],
              borderColor: 'rgba(0, 227, 169, 0.5)',
              width: 100,
              // height: 50,
              overflow: 'break',
            },
          },
          emphasis: {
            disabled: false,
            focus: 'ancestor',
          },
          animationDurationUpdate: 750,
        },
      ],
    };
  }

  getFaultTreeData() {
    this.http
      .get('../../../../assets/data/faultTreeData.json')
      .toPromise()
      .then((data) => {
        this.faultTreeChartData = data;
        this.prepareFaultTreeData(this.faultTreeChartData)
        this.setOptions();
        return data;
      });
  }

  prepareFaultTreeData(faultTreeChartDataab) {
    debugger;
    let faultDataObj = { ...faultTreeChartDataab };
    // for (let key in faultDataObj) {
    //   if (_.isPlainObject(faultDataObj[key])) {
    //   }
    // }

    this.faultTreeChartData['children'].map((data) => {
      console.log('child data :', data);
      if (data['alarm'] === 1) {
        console.log('alarm data :', data);
        data['lineStyle'] = {
          color: 'rgba(228, 66, 66, 1)',
        };
        data['label'] = {
          borderColor: 'rgba(221, 92, 192, 1)',
        };
      }
    });
    // let filterFaultAlarmData = this.faultTreeChartData.forEach(
    //   (faultTreeChartItem) => {
    //     if (faultTreeChartItem.alarm === 1) {
    //       return faultTreeChartItem;
    //     }
    //   }
    // );
    console.log('after this.faultTreeChartData::', this.faultTreeChartData);
  }
}
