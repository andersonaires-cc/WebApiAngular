using System.ComponentModel.DataAnnotations;

namespace TarefeiroAPI
{
    public class Tarefa
    {
        public int Id { get; set; }
        [StringLength(20)]
        public string Status { get; set; } = string.Empty;
        [StringLength(2000)]
        public string Comentario { get; set; } = string.Empty ;
        public int TarefaTipoId { get; set; }
        public TarefaTipo? TarefaTipo { get; set; }

    }
}
