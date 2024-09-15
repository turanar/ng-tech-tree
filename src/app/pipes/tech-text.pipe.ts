import {Pipe, PipeTransform} from "@angular/core";

@Pipe({standalone: true, name: 'techText'})
export class TechTextPipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    return value
      .replace(/£([^£]*)£/g, "<span class=\"icon $1\">&nbsp;</span>")
      .replace(/§Y([^§]*)§!/g, "<span class=\"yellow\">$1</span>")
      .replace(/§G([^§]*)§!/g, "<span class=\"green\">$1</span>")
      .replace(/§H([^§]*)§!/g, "<span class=\"orange\">$1</span>")
      .replace(/§C([^§]*)§!/g, "<span class=\"cyan\">$1</span>")
      .replace(/§c([^§]*)§!/g, "<span class=\"blue-green\">$1</span>")
      .replace(/§U([^§]*)§!/g, "<span class=\"purple\">$1</span>")
      .replace(/§R([^§]*)§!/g, "<span class=\"red\">$1</span>")

  }
}
