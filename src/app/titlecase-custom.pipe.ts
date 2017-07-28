import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titlecaseCustom'
})
export class TitlecaseCustomPipe implements PipeTransform {

    private prepositions: string[] = [
        'of',
        'the'
    ];

    transform(value: string): any {
        if (!value) {
            return null;
        }

        const words = value.toLowerCase().split(' ');
        for (let i = 0; i < words.length; i++) {
            if (i === 0 || !this.isPreposition(words[i])) {
                words[i] = this.toTitlecase(words[i]);
            }
        }

        return words.join(' ');
    }

    private toTitlecase(word: string): string {
        return (word.charAt(0).toUpperCase() + word.substr(1));
    }

    private isPreposition(word: string): boolean {
        return this.prepositions.includes(word);
    }

}
