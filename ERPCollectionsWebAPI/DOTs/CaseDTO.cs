namespace ERPCollectionsWebAPI.DOTs
{
    public class CaseDTO
    {
        public int IdCase { get; set; }
        public string CodeCase { get; set; } = null!;
        public string FormalQuote { get; set; } = null!;
        public string State { get; set; } = null!;
        public string Court { get; set; } = null!;
        public string Description { get; set; } = null!;
        public int IdClient { get; set; }
        public int IdCollaborator { get; set; }

        public virtual UserDTO IdClientNavigation { get; set; } = null!;
        public virtual UserDTO IdCollaboratorNavigation { get; set; } = null!;
    }
}
