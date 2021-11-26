"use strict";

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;

export class VisualSettings extends DataViewObjectsParser {
  public rcv_script: rcv_scriptSettings = new rcv_scriptSettings();
  public settings: CorrPlotSettings = new CorrPlotSettings();
}

export class CorrPlotSettings {
  public method: string = "circle";
}

export class rcv_scriptSettings {
  public provider;
  public source;
}