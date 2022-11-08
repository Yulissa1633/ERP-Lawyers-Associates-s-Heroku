namespace ERPCollectionsWebAPI.DOTs
{
    public class RoleDTO
    {
        public RoleDTO()
        {
            Users = new List<UserDTO>();
        }

        public int IdRole { get; set; }
        public string RoleName { get; set; } = null!;
        public string? Description { get; set; }

        public virtual List<UserDTO> Users { get; set; }
    }
}
