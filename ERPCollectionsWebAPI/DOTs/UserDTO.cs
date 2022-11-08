namespace ERPCollectionsWebAPI.DOTs
{
    public class UserDTO
    {
        public UserDTO()
        {
            CaseIdClientNavigations = new List<CaseDTO>();
            CaseIdCollaboratorNavigations = new List<CaseDTO>();
        }

        public string Lastname { get; set; } = null!;
        public string Name { get; set; } = null!;
        public int IdUser { get; set; }
        public string UserDni { get; set; } = null!;
        public string UserEmail { get; set; } = null!;
        public string Password { get; set; } = null!;
        public int IdRole { get; set; }

        public virtual RoleDTO IdRoleNavigation { get; set; }
        public virtual List<CaseDTO> CaseIdClientNavigations { get; set; }
        public virtual List<CaseDTO> CaseIdCollaboratorNavigations { get; set; }
    }
}
