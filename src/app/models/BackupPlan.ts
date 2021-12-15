export class BackupPlan {

    constructor(
        public name: string,
        public targetDirs: string[] = [],
        public sourceDirs: string[] = []
    ) { }
}