import handlebars from "handlebars";
import fs from 'fs';

interface ITemplateVariable{
    [key: string]: string | number;
}

interface IParseMailTemplate{
    file:string;
    variables: ITemplateVariable;
}

class handlebarsMailTemplate{
    public async parse({file, variables}: IParseMailTemplate):Promise<string>{
        const templatefileContent = await fs.promises.readFile(file,{
            encoding: 'utf-8',
        });
        const parseTemplate = handlebars.compile(templatefileContent);

        return parseTemplate(variables);
    }
}


export default handlebarsMailTemplate;